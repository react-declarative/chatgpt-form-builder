import { IField, FieldType } from "react-declarative";

export const fields: IField[] = [
  {
    type: FieldType.Paper,
    fieldBottomMargin: "1",
    fields: [
      {
        type: FieldType.Typography,
        typoVariant: "h6",
        placeholder: "Sign In",
      },
      {
        type: FieldType.Text,
        desktopColumns: "4",
        tabletColumns: "4",
        phoneColumns: "12",
        outlined: false,
        name: "email",
        title: 'Email',
      },
      {
        type: FieldType.Text,
        desktopColumns: "4",
        tabletColumns: "4",
        phoneColumns: "12",
        outlined: false,
        name: "password",
        title: 'Password',
      },
    ],
  },
];
