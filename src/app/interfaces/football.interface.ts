export interface Competition {
    id:            number;
    area:          Area;
    name:          string;
    code:          string;
    emblemUrl:     string;
    plan:          string;
    currentSeason: Season;
    seasons:       Season[];
    lastUpdated:   Date;
}

export interface Area {
    id:   number;
    name: string;
}

export interface Season {
    id:              number;
    startDate:       Date;
    endDate:         Date;
    currentMatchday: number | null;
    winner:          Winner | null;
}

export interface Winner {
    id:        number;
    name:      string;
    shortName: string;
    tla:       string;
    crestUrl:  string;
}
