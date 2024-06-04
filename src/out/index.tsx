import { IField, FieldType } from "react-declarative";

export const fields: IField[] = [
  {
    type: FieldType.Paper,
    fieldBottomMargin: "1",
    fields: [
      {
        type: FieldType.Typography,
        typoVariant: "h6",
        placeholder: "Sign In Information",
      },
      {
        type: FieldType.Text,
        desktopColumns: "4",
        tabletColumns: "4",
        phoneColumns: "12",
        outlined: false,
        name: "username",
        title: "Username",
      },
      {
        type: FieldType.Text,
        desktopColumns: "4",
        tabletColumns: "4",
        phoneColumns: "12",
        outlined: false,
        name: "password",
        title: "Password",
      },
      {
        type: FieldType.Checkbox,
        desktopColumns: "4",
        tabletColumns: "4",
        phoneColumns: "12",
        outlined: false,
        name: "remember_me",
        title: "Remember Me",
      },
    ],
  },
];