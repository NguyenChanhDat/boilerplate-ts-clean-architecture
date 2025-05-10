import { CreateSetDto } from "@application/dto/set/CreateSetDto";

export interface ICreateSet {
  execute(setInput: CreateSetDto): Promise<CreateSetDto>;
}
