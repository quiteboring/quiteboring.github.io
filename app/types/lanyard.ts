export type LanyardError = {
  success: false;
  error: {
    code: string;
    message: string;
  };
};

export type LanyardSuccess = {
  success: true;
  data: {
    discord_user: {
      id: string;
      username: string;
      avatar: string | null;
      discriminator?: string;
      global_name?: string | null;
    };
    discord_status: "online" | "idle" | "dnd" | "offline";
  };
};

export type LanyardData = LanyardSuccess | LanyardError;
