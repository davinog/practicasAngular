export interface Equipos {
    count:       number;
    filters:     Filters;
    competition: Competition;
    season:      Season;
    teams:       Team[];
}

export interface Competition {
    id:          number;
    area:        Area;
    name:        string;
    code:        string;
    plan:        string;
    lastUpdated: Date;
}

export interface Area {
    id:   number;
    name: Name;
}

export enum Name {
    Spain = "Spain",
}

export interface Filters {
}

export interface Season {
    id:              number;
    startDate:       Date;
    endDate:         Date;
    currentMatchday: number;
    winner:          null;
}

export interface Team {
    id:          number;
    area:        Area;
    name:        string;
    shortName:   string;
    tla:         string;
    crestUrl:    string;
    address:     string;
    phone:       string;
    website:     string;
    email:       string;
    founded:     number;
    clubColors:  string;
    venue:       string;
    lastUpdated: Date;
}
