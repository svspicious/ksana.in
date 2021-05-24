import { useRef } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { textColor } from "../constants/colors";

export const MessageDialog = ({
  title = "",
  message = "",
  cancelText = "Cancel",
  confirmText,
  onConfirm,
  isOpen,
  onClose,
}) => {
  const cancelRef = useRef();
  const { colorMode } = useColorMode();

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent width="90%">
          <AlertDialogHeader
            fontSize="lg"
            fontWeight="bold"
            color={textColor[colorMode]}
          >
            {title}
          </AlertDialogHeader>

          <AlertDialogBody color={textColor[colorMode]}>
            {message}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {cancelText}
            </Button>
            {confirmText && (
              <Button colorScheme="blue" onClick={onConfirm} ml={3}>
                {confirmText}
              </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
