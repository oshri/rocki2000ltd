import React, {Fragment} from 'react';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '../TextField';
import './TextArrayField.scss';

const TextArrayField = ({fields, onAdd, onRemove}) => {
	
	return (
		<div className="text-array-field">
			<div>

				<button className="rounded-icon-button" onClick={() => fields.push('')}>
					<FontAwesomeIcon icon="plus" />
				</button>

				{
					fields.map((field, index) => (
						<div className="TextArrayField" key={index}>
							<div className="array-field">
								<Field  name={field} type="text" component={TextField}/>
								<button className="rounded-icon-button" onClick={() => fields.remove(index)}>
									<FontAwesomeIcon icon="trash-alt" />
								</button>
							</div>
						</div>	
					))
				}
			</div>
			
		</div>
	);
};

export default TextArrayField;