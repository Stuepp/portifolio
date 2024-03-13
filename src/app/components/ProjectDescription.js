export default function ProjectDescription({description}){
  return(
    <div>
      <h1 className="text-2xl">Summary of the Proejct</h1>
      <div>
        <p>{description}</p>
        <div className="lg:flex my-2">
          <ul className="mx-auto max-w-md space-y-1 text-gray-300 list-disc list-inside text-center">
            <li>Each artist has an id, name, address and a cell phone number. The musician at the beginning of their career they often
                share an address and, furthermore, it is assumed that each address only has one telephone number.
            </li>
            <li>Each musician can belong to one or more bands.</li>
            <li>Each instrument used in the studios has a name (e.g. guitar, drums, etc.) and an internal code.</li>
            <li>Each disc recorded at the company has a title, a date, a format (e.g. CD, MC, K7), and a disc identifier.</li>
          </ul>
          <ul className="mx-auto max-w-md space-y-1 text-gray-300 list-disc list-inside text-center">
            <li>Each song recorded by the company has a title and authors.</li>
            <li>Each musician can play multiple instruments, and each instrument can be played by multiple musicians.</li>
            <li>Each record belongs to a musician or a band and has a certain number of songs, but each song can appear on one or more records.</li>
            <li>Each song can feature several musicians or bands, and each musician or panel can participate in several songs.</li>
            <li>Each record has a producer. Producers can produce multiple records.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}