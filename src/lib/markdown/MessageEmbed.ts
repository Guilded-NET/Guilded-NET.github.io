export interface MessageEmbed {
    // Header
    author?: MessageEmbedAuthor;
    title?: string;
    url?: string;
    // Content
    description?: string;
    thumbnail?: MessageEmbedMedia;
    fields?: MessageEmbedField[];
    // Footer
    image?: MessageEmbedMedia;
    footer?: MessageEmbedFooter;
    // Extra
    color?: number;
    timestamp?: string;
}

export interface MessageEmbedAuthor {
    name: string;
    url?: string;
    icon_url?: string;
}

export interface MessageEmbedMedia {
    src: string;
}

export interface MessageEmbedFooter {
    text?: string;
    icon_url?: string;
}

export interface MessageEmbedField {
    name: string;
    value: string;
    inline?: boolean;
}
