export const breakpoints = {
    sm: 375,
    lg: 1440,
  };
  
  export const mobile = "@media only screen and (max-width: 575px)";
  export const desktop = "@media only screen and (min-width: 992px)";
  export const tablet =
    "@media only screen and (min-width: 576px) and (max-width: 991px)";
  export const tabletDown = "@media only screen and (max-width: 991px)";
  export const tabletUp = "@media only screen and (min-width: 576px)";
  
  export const landscape = "@media only screen and (orientation: landscape)";
  
  export const fluid = (val:number, breakpoint:number) => {
    return `${(val * 100) / breakpoint}vw`;
  };
  
  export const fluidh = (val:number, breakpoint:number) => {
    return `${(val * 100) / breakpoint}vh`;
  };