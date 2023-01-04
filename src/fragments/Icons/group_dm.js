import SvgIcon from "../../components/SvgIcon";

export default function GroupDMIcon({ pathClass }) {
  return (
    <SvgIcon x="0" y="0">
      <SvgIcon.Path
        className={pathClass}
        fill="#B9BBBE"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"
      ></SvgIcon.Path>
    </SvgIcon>
  );
}
