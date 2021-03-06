import useSwr from 'swr'
import Layout from '@/layout/Layout'
import Hero from '@/home/Hero'
import SkillCard from '@/home/SkillCard'
import SectionHead from '@/globals/SectionHead'
import Divider from '@/globals/Divider'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Home = () => {
  const { data, error } = useSwr('/api', fetcher)

  if (error) return <Layout>Failed to load data</Layout>
  if (!data) return <Layout>Searching For Chris' Data</Layout>

  return (
    <Layout>
      <Hero myName={data.fullName} />
      <SectionHead section='Core Skills' />
      <Divider />
      {/* skills */}
        <SkillCard />

      {/* contact info */}
      {data.contacts.map((data) => (
        <div key={data.id}>
          <h4>{data.name}</h4> <p>{data.address}</p>
        </div>
      ))}
      {/* social links */}
      {data.social.map((data) => (
        <div key={data.id}>
          <a href={data.link}>{data.name}</a> <br />
        </div>
      ))}
    </Layout>
  )
}

export default Home

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api`)
//   const data = await res.json()

//   // console.log(data)

//   return {
//     props: { data },
//     revalidate: 1,
//   }
// }
