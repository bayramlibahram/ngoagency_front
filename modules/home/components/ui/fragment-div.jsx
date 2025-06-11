const FragmentDiv = ({style,children}) => {
   return ( 
      <div className={`${style["custom-margin"]}`}>{children}</div>
    );
}
 
export default FragmentDiv;