export type MatchType = {
  id: number | string;
  href?: string;

  name?: string;

  nextMatchId: number | string | null;

  nextLooserMatchId?: number | string;

  tournamentRoundText?: string;

  startTime: string;

  state: "PLAYED" | "NO_SHOW" | "WALK_OVER" | "NO_PARTY" | string;

  participants: any[];

  [key: string]: any;
};
