import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew}) => $isnew ? "transparent" : theme.COLORS_BACKGROUND_900};
  color: ${({ theme}) => theme.COLORS_GRAY_300};
  border: ${({ theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS_GRAY_300}` : "none"};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme}) => theme.COLORS_RED}
  }
  .button-add {
    color: ${({ theme}) => theme.COLORS_ORANGE}
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme}) => theme.COLORS_WHITE};
    background: "transparent";

    border: none;

    &::placeholder {
      color: ${({ theme}) => theme.COLORS_GRAY_300}
    }
  }
`;