export interface Launch {
  id: string;
  mission_name: string;
  details?: string;
  links: {
    flickr_images: string[];
  };
  launch_date_utc: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

export interface LaunchModal {
  id: string;
  closeModal: () => void;
}
