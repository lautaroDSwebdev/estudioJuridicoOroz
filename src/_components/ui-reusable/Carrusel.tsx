import React from 'react'

const Carrusel = () => {

    const carru = [
        {id: 0, logo: "/BanerPodNac-rf6d7cbwb6khsemns4ebketi61lzlo4e45frd56h9q.png", data: ""},
        {id: 1, logo: "/BanPodBs-rf6d7e7koun2fmjxh57kpecfctcq12buseqqbp3oxa.png", data: ""},
        {id: 2, logo: "/CONDOR_300-p3n89m5ajxhwwfauxhi66szq1xgfoquncygp687566.png", data: "micro condor"},
        {id: 3, logo: "/EXPRESO-BUENOS-AIRES.png", data: "micro expreso buenos aires"},
        {id: 3657, logo: "/Anses.png", data: "Anses"},
        {id: 4, logo: "/grupo_sur_300-p3nglvp9qojdo35dl9zsp18lh1hijyvtz4sk4azpim.png", data: "micro sur"},
        {id: 5, logo: "/IPS-Logo_VERDE-p40gsuk3u9pw28d8exhrfqphf5hrjjxtzhai9nyne6.png", data: ""},
        {id: 6, logo: "/jetmar_300-p3n8a32dyy52pema6otgfoq0qv51japtfa7ft7i226.png", data: "micro jetmar"},
        {id: 7, logo: "/BanerPodNac-rf6d7cbwb6khsemns4ebketi61lzlo4e45frd56h9q.png", data: ""},
        {id: 8, logo: "/BanPodBs-rf6d7e7koun2fmjxh57kpecfctcq12buseqqbp3oxa.png", data: ""},
        {id: 9, logo: "/CONDOR_300-p3n89m5ajxhwwfauxhi66szq1xgfoquncygp687566.png", data: "micro condor"},
        {id: 763, logo: "/Anses.png", data: "Anses"},
        {id: 3543, logo: "/EXPRESO-BUENOS-AIRES.png", data: "micro expreso buenos aires"},
        {id: 4645654, logo: "/grupo_sur_300-p3nglvp9qojdo35dl9zsp18lh1hijyvtz4sk4azpim.png", data: "micro sur"},
        {id: 5465, logo: "/IPS-Logo_VERDE-p40gsuk3u9pw28d8exhrfqphf5hrjjxtzhai9nyne6.png", data: ""},
        {id: 665, logo: "/jetmar_300-p3n8a32dyy52pema6otgfoq0qv51japtfa7ft7i226.png", data: "micro jetmar"},
        {id: 657, logo: "/BanerPodNac-rf6d7cbwb6khsemns4ebketi61lzlo4e45frd56h9q.png", data: ""},
        {id: 675, logo: "/BanPodBs-rf6d7e7koun2fmjxh57kpecfctcq12buseqqbp3oxa.png", data: ""},
        {id: 243, logo: "/CONDOR_300-p3n89m5ajxhwwfauxhi66szq1xgfoquncygp687566.png", data: "micro condor"},
        {id: 7863, logo: "/Anses.png", data: "Anses"},
        {id: 3766, logo: "/EXPRESO-BUENOS-AIRES.png", data: "micro expreso buenos aires"},
        {id: 42354, logo: "/grupo_sur_300-p3nglvp9qojdo35dl9zsp18lh1hijyvtz4sk4azpim.png", data: "micro sur"},
        {id: 576, logo: "/IPS-Logo_VERDE-p40gsuk3u9pw28d8exhrfqphf5hrjjxtzhai9nyne6.png", data: ""},
        {id: 632, logo: "/jetmar_300-p3n8a32dyy52pema6otgfoq0qv51japtfa7ft7i226.png", data: "micro jetmar"},
    ]
  return (
    <div className='carousel'>
      <div className='group'>
        {
            carru.map( e => (
                <img className='max-h-[20rem] max-w-[25rem]' key={e.id} src={e.logo} alt={e.data} />
            ))
        }
      </div>
    </div>
  )
}

export default Carrusel
