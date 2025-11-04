function TextInput( label, type="text", value, onChange){
    return(
        <label className="block">
            {/* Todo: Handle label */}
            {label}
            <input 
                type={type}
                className="w-full px-4 py-2 rounded-md border-grey-500"
                onChange={onChange}
                value={value}
            />
        </label>
    );
}

export default TextInput;