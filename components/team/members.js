import { team } from "../../state/_teamData"
import styles from '../../styles/local/components/team.module.css'

const Members = () => {
    const _members = team.map(member => {
        return (
            <div className={["keen-slider__slide", `number-slides${member.id}`, styles.teamCard].join(" ")} key={member.id}>
                <div className={styles.imgWrap}>
                    <img src={member.img} alt="team member" className={styles.teamImg} />
                    
                </div>
                
                <div className={styles.socials}>
                    <a href={member.linkedin} target="_newtab">
                        <i className={["bi bi-linkedin mx-1", styles.socialIcons].join(" ")}></i>
                    </a>
                    <a href={member.twitter} target="_newtab">
                        <i className={["bi bi-twitter mx-1", styles.socialIcons].join(" ")}></i>
                    </a>
                </div>
                <div>
                    <h2>{member.name}</h2>
                    <h4>{member.role}</h4>
                </div>
                
            </div>
        )
    })
    return(
        <>
            {_members}
        </>
    )
}
    
export default Members