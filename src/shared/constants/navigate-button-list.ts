import { FolderSearch, Home, Paperclip, UserSearch } from "lucide-react";

import { ButtonItem } from "../@types";

import { ROUTER_PATH } from "./router-path";

export const NAVIGATE_BUTTON_LIST: ButtonItem[] = [
  { tab: "HOME", icon: Home, text: "HOME", path: ROUTER_PATH.ROOT },
  { tab: "CLIP", icon: Paperclip, text: "CLIP", path: ROUTER_PATH.CLIP },
  { tab: "SEARCH", icon: FolderSearch, text: "SEARCH", path: ROUTER_PATH.CLIP_SEARCH },
  { tab: "FRIEND_SEARCH", icon: UserSearch, text: "FRIEND", path: ROUTER_PATH.FRIEND_SEARCH },
];
