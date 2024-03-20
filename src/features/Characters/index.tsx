export type InformationInput = {
  id: string;
  placeholder?: string;
};

export type CharacterSheetForm = {
  information: InformationInput[];
  attributes: any;
  skills: any;
  otherTraits: any;
};

export { default } from "./CharacterList";
