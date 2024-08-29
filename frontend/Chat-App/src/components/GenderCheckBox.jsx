
const GenderCheckBox = ({handleCheckBoxChange,selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label cursor-pointer gap-1 ${selectedGender === 'male' ? 'selected' : ''}`}>
         <span className="label-text">Male</span>
         <input type="checkbox" onChange={()=>handleCheckBoxChange('male')} checked={selectedGender === 'male'} className="checkbox border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer gap-1 ${selectedGender === 'female' ? 'selected' : ''}`}>
         <span className="label-text">Female</span>
         <input type="checkbox" onChange={()=>handleCheckBoxChange('female')} checked={selectedGender === 'female'} className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox
