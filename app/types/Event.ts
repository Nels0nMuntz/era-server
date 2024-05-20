import { User } from "./User";

export interface Event {
  title: string;
  description: string;
  eventDate: Date;
  organizer: string;
  participants: User[];
}

export enum EventSource {
  SocialMedia = "Social media",
  Friends = "Friends",
  FoundMyself = "Found myself",
}

export interface GetEventsResponse {
  events: Omit<Event, "participants">[];
  currentPage: number;
  totalPages: number;
}
export interface GetEventResponse {
  event: Omit<Event, "participants"> & { id: string };
}

export interface RegisterUserRequest {
  user: User;
  eventId: string;
  eventSource: EventSource;
}
