export interface InstagramData {
    pk: number;
    display_url: string;
    image_versions2: {
        candidates: {
            width: number;
            height: number;
            url: string;
        }[];
    };
    has_audio: boolean;
    is_dash_eligible: string;
    video_dash_manifest: string;
    number_of_qualities: number;
    video_url: string;
    taken_at: number;
    code: string;
    comment_count: number;
    like_count: number;
    play_count: number;
    like_and_view_counts_disabled: boolean;
    media_type: number;
    video_duration: number;
    caption: {
        text: string;
    };
    title: any;
    user: {
        pk: number;
        username: string;
        full_name: string;
        profile_pic_url: string;
        is_private: boolean;
        is_verified: boolean;
    };
    coauthor_producers: {
        pk: number;
        is_verified: boolean;
        profile_pic_url: string;
        username: string;
    }[];
    product_type: string;
    can_viewer_reshare: boolean;
    reshare_count: number;
    usertags: {
        in: {
            user: {
                pk: number;
                username: string;
                full_name: string;
                profile_pic_url: string;
                is_private: boolean;
                is_verified: boolean;
            };
            position: number[];
        }[];
    };
    is_paid_partnership: boolean;
    sponsor_tags: any;
    clips_metadata: {
        music_info: any;
    };
}

export interface SimplifiedInstagramData {
    display_url: string;
    comment_count: number;
    like_count: number;
}