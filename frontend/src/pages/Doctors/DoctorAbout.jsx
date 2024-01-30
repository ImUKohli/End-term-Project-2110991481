import { formateDate } from "../../utils/formateDate"
const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About of
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">Dr. Anil Gupta</span>
            </h3>
            <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam voluptatibus nulla necessitatibus rem fugiat molestias quibusdam qui dolores sed adipisci omnis optio repudiandae dolore ut natus distinctio eius nisi, quae ab. Blanditiis, explicabo vitae! Maxime tempora facilis nostrum aut cum ipsam soluta iure, facere omnis eius atque numquam dolorum.</p>
        </div>

        <div className="mt-12 ">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate("07-24-2000")} to {formateDate("05-02-2008")}</span>
                        <p className="text-[15px] leading-6 font-medium text-textColor">M.B.B.S in Surgery</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">PGI, Chandigarh</p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate("07-02-2008")} to {formateDate("10-02-2016")}</span>
                        <p className="text-[15px] leading-6 font-medium text-textColor">PHD in Surgery</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">GMCH, Chandigarh</p>
                </li>
            </ul>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("09-21-2004")} to {formateDate("03-07-2008")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">Senior Surgeon</p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">PGI, Chandigarh</p>
                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("04-15-2010")} to {formateDate("03-07-2016")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">Surgeon-Laparoscopic Specialist</p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">GMCH, Chandigarh</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout