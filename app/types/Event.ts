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

export interface EventsResponse {
  events: Event[];
  currentPage: number;
  totalPages: number;
}

export interface RegisterUserRequest {
  user: User;
  eventId: string;
  eventSource: EventSource;
}
