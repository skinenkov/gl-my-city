export interface IWeatherItem {
    temperature: number;
    wind: number;
    icon: string;
}

export interface IProfileItem {
    followers: number;
    following: number;
    photo: string;
}

export interface IHotelItem {
    id: number;
    title: string;
    address: string;
    description: string;
    phone: string;
    picture: string;
    photos: string[];
    weather: IWeatherItem;
    profile: IProfileItem;
    stars: number;
    active?: number;
}

export interface IFilterButtonsData {
    name: string;
    code: string;
    values: string[];
}
