import {Image} from './image';
import {User} from "../user";

export class Annonce {
    id: number = 0;
    make: string;
    numberOfSeats: number;
    maxSpeed: number;
    gearbox: string;
    numberOfDoor: number;
    reinforcedCluth: boolean;
    horsePower: number;
    horsePowerSinceTheLatestModification: number;
    fiscalHorsePower: number;
    price: number;
    stage: number;
    model: string;
    year: string;
    mileage: number;
    mileageSince1stModification: number;
    category: string;
    energy: string;
    fuelEconomy: string;
    fuelEconomySinceTheLatestModification: string;
    localisation: string;
    outSideColor: string;
    firstHand: boolean;
    euroNorme: string;
    co2: number;
    inSideColor: string;
    intercooler: string;
    highPerformanceTuningCompany: string;
    publishedDate: string;
    trim: string;
    driveType: string;
    torque: number;
    torqueSinceTheLatestModification: number;
    exaust: string;
    turbo: string;
    airAdmission: string;
    dumpValve: string;
    airFilter: string;
    options: string;
    technicalControl: string;

    user: User;
    images: Image[] = [];
}
