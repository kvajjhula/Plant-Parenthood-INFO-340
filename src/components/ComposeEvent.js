import React, { useState } from "react";
import DatePicker from "react-datepicker";


export function ComposeEvent(props) {
    const [typedValue, setTypedValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const addEventCallback = props.addEventCallback;

    const handleTitleChange = (event) => {
        setTypedValue(event.target.value);
    }

    const handleStartDateChange = (date) => {
        setStartDate(date);
    }

    const handleEndDateChange = (date) => {
        setEndDate(date);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addEventCallback(typedValue, startDate, endDate);
    }

    return (
        <div className="add-event">
            <input className="event-add-title" type="text" placeholder="Add Title"
                onChange={handleTitleChange}
            />
            <DatePicker className="event-date" placeholderText="Start Date"
                selected={startDate} 
                onChange={handleStartDateChange} 
              /> 
            
            <DatePicker className="event-date" placeholderText="End Date"
                selected={endDate}  
                onChange={handleEndDateChange} />

            <button className="event-btn"
                onClick={handleSubmit}>
                Add Event
            </button>
        </div>
    );
}