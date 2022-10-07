type Opaque<K, T> = T & { __TYPE__: K }

export namespace Id {
  export type Legislation = Opaque<'Legislation', string>
  export type Resolution = Opaque<'Resolution', string>
  export type Bill = Opaque<'Bill', string>
  export type Amendment = Opaque<'Amendment', string>
  export type Vote = Opaque<'Vote', string>
}

export type Chamber = 'House' | 'Senate'
export type ResolutionType = 'Concurrent Resolution' | 'Joint Resolution' | 'Simple Resolution'

interface Common {
  id: string;
  chamber: Chamber;
  type: string;
  number: number;
  congress?: number;
}

export interface Legislation extends Common {
  type: ResolutionType | 'Bill';
  binding: boolean;
}

export interface Resolution extends Legislation {
  type: ResolutionType;
  binding: false;
}

export interface Bill extends Legislation {
  type: 'Bill';
  binding: true;
}

export interface Amendment extends Common {
  type: 'Amendment';
}

export interface Vote extends Common {
  type: 'Vote';
  session: number;
}
