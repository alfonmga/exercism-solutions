const generateRandomStringUtil = (len: number, charSet: string): string => {
  let str = "";
  for (let i = 0; i < len; i += 1) {
    str += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return str;
};

class RobotName {
  private readonly ALLOWED_ROBOT_NAME_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  private readonly ALLOWED_ROBOT_NAME_NUMBERS = "01234566789";

  private TAKEN_ROBOT_NAMES: string[] = [];

  name: string;

  constructor() {
    this.name = this.registerNewRobotName();
  }

  private checkIfRobotNameIsAlreadyTaken(robotNameCandidate: string): boolean {
    return this.TAKEN_ROBOT_NAMES.includes(robotNameCandidate);
  }

  private takeNewRobotName(newRobotName: string): void {
    this.TAKEN_ROBOT_NAMES.push(newRobotName);
  }

  private generateRobotName(): string {
    return `${generateRandomStringUtil(
      2,
      this.ALLOWED_ROBOT_NAME_LETTERS
    )}${generateRandomStringUtil(3, this.ALLOWED_ROBOT_NAME_NUMBERS)}`;
  }

  private registerNewRobotName(): string {
    let generatedRobotName = this.generateRobotName();

    while (this.checkIfRobotNameIsAlreadyTaken(generatedRobotName)) {
      generatedRobotName = this.generateRobotName();
    }
    this.takeNewRobotName(generatedRobotName);

    return generatedRobotName;
  }

  resetName(): void {
    this.name = this.registerNewRobotName();
  }
}

export default RobotName;
