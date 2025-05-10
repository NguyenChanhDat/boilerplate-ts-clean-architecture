import { CreateBodyTrackDto } from "@application/dto/bodyTrack/CreateBodyTrackDto";

export interface ICreateBodyTrack {
  execute(bodyTrackInput: CreateBodyTrackDto): Promise<CreateBodyTrackDto>;
}
