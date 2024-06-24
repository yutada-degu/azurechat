import { MenuTrayToggle } from "@/features/main-menu/menu-tray-toggle";
import {
  Menu,
  MenuBar,
  MenuItem,
  MenuItemContainer,
  menuIconProps,
} from "@/ui/menu";
import {
  Book,
  Home,
  MessageCircle,
  PocketKnife,
  Sheet,
  VenetianMask,
  Sun,
  Moon,
  Laptop2,
} from "lucide-react";
import { getCurrentUser } from "../auth-page/helpers";
import { MenuLink } from "./menu-link";
import { UserProfile } from "./user-profile";

export const MainMenu = async () => {
  const user = await getCurrentUser();

  return (
    <Menu>
      <MenuBar>
        <MenuItemContainer>
          <MenuItem tooltip="Home" asChild>
            <MenuLink href="/chat" ariaLabel="Go to the Home page">
              <Home {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuTrayToggle />
        </MenuItemContainer>
        <MenuItemContainer>
          <MenuItem tooltip="Chat">
            <MenuLink href="/chat" ariaLabel="Go to the Chat page">
              <MessageCircle {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuItem tooltip="Persona">
            <MenuLink href="/persona" ariaLabel="Go to the Persona configuration page">
              <VenetianMask {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuItem tooltip="extensions">
            <MenuLink href="/extensions" ariaLabel="Go to the Extensions configuration page">
              <PocketKnife {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuItem tooltip="prompts">
            <MenuLink href="/prompt" ariaLabel="Go to the Prompt Library configuration page">
              <Book {...menuIconProps} />
            </MenuLink>
          </MenuItem>

                    <MenuItem tooltip="Prompt Recipes">
            <MenuLink href="https://isiglobal000.sharepoint.com/sites/faqbeta_byUser/Lists/List3/AllItems.aspx?viewid=2ec9240a%2D51ff%2D4cab%2Dbada%2Dc79445d41e69" ariaLabel="Go to the Prompt Recipes page">
             <Sun {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          {user.isAdmin && (
            <>
              <MenuItem tooltip="reporting">
                <MenuLink href="/reporting" ariaLabel="Go to the Admin reporting" >
                  <Sheet {...menuIconProps} />
                </MenuLink>
              </MenuItem>
            </>
          )}
        </MenuItemContainer>
        <MenuItemContainer>
          <MenuItem tooltip="Profile">
            <UserProfile />
          </MenuItem>
        </MenuItemContainer>
      </MenuBar>
    </Menu>
  );
};
