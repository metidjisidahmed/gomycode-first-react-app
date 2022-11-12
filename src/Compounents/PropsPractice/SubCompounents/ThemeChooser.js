export default function ThemeChooser(props){
    if(props.isDark){
        return(
            <div className="dark-theme">
                {props.children}
            </div>
        )

    }else{
        return(
            <div className="light-theme">
                {props.children}
            </div>
        )
    }
}
