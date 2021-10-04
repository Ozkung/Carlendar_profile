<template>
  <full-calendar :config="config" :events="events" />
</template>

<script>
import moment from "moment";
export default {
  name: "hello",
  data() {
    return {
      events: [
        {
          title: "test1",
          start: moment(),
          end: moment().add(1, "d"),
        },
        {
          title: "test2",
          start: moment().add(2, "d"),
          end: moment().add(3, "d"),
        },
      ],
      config: {
        defaultView: "month",
        eventRender: function (event, element) {
          console.log(event.start);
        },
      },
      // config: {
      //   schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
      //   defaultView: "timelineDay",
      //   header: {
      //     left: "prev,next",
      //     center: "title",
      //     right: "timelineDay,timelineWeek,timelineMonth",
      //   },
      //   resourceLabelText: "Rooms",
      //   resources: [
      //     {
      //       id: "a",
      //       title: "Room A",
      //       children: [
      //         {
      //           id: "a1",
      //           title: "Room A1",
      //         },
      //         {
      //           id: "a2",
      //           title: "Room A2",
      //         },
      //       ],
      //     },
      //   ],
      // },
    };
  },
};
</script>
