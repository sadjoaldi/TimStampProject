// import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
// import { IoIosCalendar } from "react-icons/io";
import "../styles/calendar.scss";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

function Calendar() {
  const events = [
    {
      title: "Temps de travail",
      start: "2021-10-01T10:00:00",
      end: "2021-10-01T17:00:00",
    },
  ];
  // const [events, setEvents] = useState([]);

  const calendarRef = useRef(null);

  const [projectName, setProjectName] = useState("");

  const handlKeyDown = (e) => {
    if (e.key === 13) {
      // console.info("hello");
    }
  };

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    const dateInput = document.getElementById("dateInput");

    dateInput.addEventListener("change", () => {
      const newDate = new Date(calendarRef);
      calendarApi.gotoDate(newDate);
    });
  }, []);
  return (
    <>
      {" "}
      <div className="project_name">
        <input
          type="text"
          name="project_name"
          value={projectName}
          placeholder="Lieu de travail"
          id="project_name"
          onChange={(e) => setProjectName(e.target.value)}
          onKeyDown={handlKeyDown}
        />

        <input type="text" id="dateInput" placeholder="hello" />
      </div>
      <div className="calendar">
        <div className="calendar_box">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            ref={calendarRef}
            headerToolbar={{
              start: "today prev next",
              center: "title",
              right: "timeGridWeek,timeGridDay",
            }}
            allDaySlot={false}
            contentHeight="auto"
            events={events}
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: false,
              hour12: false,
            }}
          />
          ;
        </div>
      </div>{" "}
      <Outlet />
    </>
  );
}

export default Calendar;
