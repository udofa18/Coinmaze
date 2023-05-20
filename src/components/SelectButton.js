const SelectButton = ({ children, selected, onClick }) => {
    return (
        <span onClick={onClick} className={classes.selectbutton}>
          {children}
        </span>
      );

}
export default SelectButton;