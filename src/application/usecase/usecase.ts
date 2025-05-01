export interface Usecase<InputDto, OutputDTO> {
  execute(input: InputDto): Promise<OutputDTO>;
}