export type LanyardData = {
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