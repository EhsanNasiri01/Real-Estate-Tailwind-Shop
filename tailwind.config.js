/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{

        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      colors:{
        "dark-background":"#141414",
        purple:{
          60: "#703BF7",
          65:"#8254F8",
          70:"#946CF9",
          75: "#A685FA",
          90:"#DBCEFD",
          95:"#EDE7FE",
          97:"#F4F0FE",
          99:"#FBFAFF"
        },
        white:{
          DEFAULT:"#FFFFFF",
          90:"#E4E4E7",
          95:"#F1F1F3",
          97:"#F7F7F8",
          99:"#FCFCFD"

        },
        gray:{
          "08":"#141414",
          "10":"#1A1A1A",
          "15":"#262626",
          "20":"#333333",
          "30":"#4D4D4D",
          "40":"#666666",
          "50":"#808080",
          "60":"#999999",

        }
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0,0,0,0.05)",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        4.5:"1.125rem",
        7.5:"30px",
        12.5:"50px",
        15:"60px",
        25: "6.25rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      borderRadius: {
        "normal":"10px",
        "3xl": "24px",
        "4xl": "2rem",
      },
      backgroundImage: {
        TopHeader: "url(../images/Abstract-Design.png)",
        TopBody: "url(../images/topbody.png)",
        explore:"url(../images/explore/Explore.png)",
      },
    },
    container: {
      center: true,
      padding: '162px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > * ");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}

