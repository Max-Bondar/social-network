interface BaseEntity {
  limit?: number;
  offset?: number;
  activeTab?: number;
}

export interface ProfilePageQueryI extends BaseEntity {
  favorite?: string;
  author?: string;
}

export interface HomePageQueryI extends BaseEntity {
  tag?: string;
}
