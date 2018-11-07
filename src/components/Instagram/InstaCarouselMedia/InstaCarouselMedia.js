import react, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from 'reactstrap';
import './InstaCarouselMedia.scss';
import Image from '../../Image';

class InstaCarouselMedia extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.slides = [];
    }


	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === this.carouselMedia.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? this.carouselMedia.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
        const { activeIndex } = this.state;
        
        this.carouselMedia = this.props.carouselMedia.map((media, index) => {
            return {
                id: `slide-${index}`,
                src: media.images.standard_resolution.url
            }
        });


		const slides = this.carouselMedia.map((media, index) => {
			return (
				<CarouselItem
					className="custom-tag"
					tag="div"
					key={media.id}
					onExiting={this.onExiting}
					onExited={this.onExited}>
					
					<Image src={media.src} alt="" className="img-responsive" />
				</CarouselItem>
			);
		});

		return (
			<Carousel
                className="InstaCarouselMedia"
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>

                <CarouselIndicators
                    items={this.carouselMedia}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.next}
                />
            </Carousel>
		);
	}
}

InstaCarouselMedia.propTypes = {
	carouselMedia: PropTypes.arrayOf(PropTypes.object)
};

export default InstaCarouselMedia;
