import { Event, EventSource } from "./Event";

export interface User {
  fullName: string;
  email: string;
  dateOfBirth: Date;
  // events: {
  //   event: Event;
  //   eventSource: string;
  // }[];
}

export interface UserPopulated extends User {
  events: {
    event: Event;
    eventSource: EventSource;
  }[];
}

// export interface CreateUserRequest
//   extends Pick<User, "fullName" | "email" | "dateOfBirth"> {
//   events: {
//     eventId: string;
//     eventSource: string;
//   }[];
// }
