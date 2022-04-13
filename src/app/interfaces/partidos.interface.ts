export interface Partidos {
    count:       number;
    filters:     Filters;
    competition: Competition;
    matches:     Match[];
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
    AthleticClub = "Athletic Club",
    CAOsasuna = "CA Osasuna",
    ClubAtléticoDeMadrid = "Club Atlético de Madrid",
    CádizCF = "Cádiz CF",
    DeportivoAlavés = "Deportivo Alavés",
    ElcheCF = "Elche CF",
    FCBarcelona = "FC Barcelona",
    GetafeCF = "Getafe CF",
    GranadaCF = "Granada CF",
    LevanteUD = "Levante UD",
    RCCeltaDeVigo = "RC Celta de Vigo",
    RCDEspanyolDeBarcelona = "RCD Espanyol de Barcelona",
    RCDMallorca = "RCD Mallorca",
    RayoVallecanoDeMadrid = "Rayo Vallecano de Madrid",
    RealBetisBalompié = "Real Betis Balompié",
    RealMadridCF = "Real Madrid CF",
    RealSociedadDeFútbol = "Real Sociedad de Fútbol",
    SevillaFC = "Sevilla FC",
    Spain = "Spain",
    ValenciaCF = "Valencia CF",
    VillarrealCF = "Villarreal CF",
}

export interface Filters {
}

export interface Match {
    id:          number;
    season:      Season;
    utcDate:     Date;
    status:      Status;
    matchday:    number;
    stage:       Stage;
    group:       null;
    lastUpdated: Date;
    odds:        Odds;
    score:       Score;
    homeTeam:    Area;
    awayTeam:    Area;
    referees:    Referee[];
}

export interface Odds {
    msg: Msg;
}

export enum Msg {
    ActivateOddsPackageInUserPanelToRetrieveOdds = "Activate Odds-Package in User-Panel to retrieve odds.",
}

export interface Referee {
    id:          number;
    name:        string;
    role:        Role;
    nationality: Name | null;
}

export enum Role {
    AssistantRefereeN1 = "ASSISTANT_REFEREE_N1",
    AssistantRefereeN2 = "ASSISTANT_REFEREE_N2",
    FourthOfficial = "FOURTH_OFFICIAL",
    Referee = "REFEREE",
    VideoAssistantRefereeN1 = "VIDEO_ASSISTANT_REFEREE_N1",
    VideoAssistantRefereeN2 = "VIDEO_ASSISTANT_REFEREE_N2",
}

export interface Score {
    winner:    Winner | null;
    duration:  Duration;
    fullTime:  ExtraTime;
    halfTime:  ExtraTime;
    extraTime: ExtraTime;
    penalties: ExtraTime;
}

export enum Duration {
    Regular = "REGULAR",
}

export interface ExtraTime {
    homeTeam: number | null;
    awayTeam: number | null;
}

export enum Winner {
    AwayTeam = "AWAY_TEAM",
    Draw = "DRAW",
    HomeTeam = "HOME_TEAM",
}

export interface Season {
    id:              number;
    startDate:       Date;
    endDate:         Date;
    currentMatchday: number;
}

export enum Stage {
    RegularSeason = "REGULAR_SEASON",
}

export enum Status {
    Finished = "FINISHED",
    Scheduled = "SCHEDULED",
}
