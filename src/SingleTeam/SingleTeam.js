import SubHeader from '../SubHeader/SubHeader'
import './SingleTeam.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { data } from '../Members/MembersContent/data'

function SingleTeam(){
    const { itemSlug } = useParams()
    const item = data.find(item => item.slug == itemSlug)

    return (
        <>
            <SubHeader title='Team Single' subtitle='Meet Our Member' />
            <section className='single_team'>
                <div className='single_team_container'>
                    <img src={item.img} />
                    <div className='single_team_info'>
                        <div>
                            <h4>{item.name}</h4>
                            <span>{item.profession}</span>
                        </div>
                        <ul className='contact'>
                            <li><strong>Phone: </strong>{item.phone}</li>
                            <li><strong>Email: </strong>{item.email}</li>
                        </ul>
                        <p>{item.text1}</p>
                        <p>{item.text}</p>
                        <p>{item.text2}</p>
                        <ul>
                            <li><a href={item.social1}><svg width="18px" height="18px" viewBox="0 -1 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#1351a8"/><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/><path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#1351a8"/></svg></a></li>
                            <li><a href={item.social2}><svg width="18px" height="18px" viewBox="0 0 20 20"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#1351a8"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"></path></g></g></g></svg></a></li>
                            <li><a href={item.social3}><svg fill="#1351a8" width="18px" height="18px" viewBox="0 -1 32 32"><path d="M25.916 7.921c-1.881 2.234-4.289 3.965-7.035 5.009l-0.118 0.039c0.3 0.612 0.587 1.231 0.85 1.857 0.1 0.225 0.187 0.45 0.275 0.662 0.927-0.102 2.003-0.16 3.092-0.16 2.063 0 4.077 0.208 6.023 0.605l-0.193-0.033c-0.020-3.040-1.107-5.821-2.904-7.994l0.017 0.021zM13.001 3.569c1.595 2.15 3.176 4.6 4.598 7.151l0.178 0.347c2.712-0.908 4.989-2.511 6.694-4.6l0.021-0.026c-2.247-2.006-5.228-3.232-8.494-3.232-1.063 0-2.096 0.13-3.084 0.375l0.088-0.018zM3.46 13.395c4.219-0.022 8.295-0.59 12.176-1.636l-0.333 0.076c-1.652-2.899-3.222-5.318-4.912-7.644l0.163 0.236c-3.596 1.721-6.227 4.966-7.077 8.875l-0.015 0.085zM6.484 24.585c2.42-3.882 6.010-6.839 10.271-8.408l0.141-0.045c0.169-0.056 0.337-0.105 0.506-0.15-0.325-0.731-0.675-1.458-1.040-2.174-3.888 1.154-8.355 1.819-12.977 1.819-0.066 0-0.131-0-0.196-0l0.010 0-0.005 0.39c0 0.003 0 0.006 0 0.009 0 3.297 1.25 6.302 3.301 8.568l-0.010-0.011zM21.005 27.809c-0.682-3.699-1.63-6.957-2.863-10.070l0.126 0.361-0.082 0.025c-4.314 1.346-7.826 4.192-10.002 7.915l-0.045 0.083c2.145 1.688 4.885 2.707 7.863 2.707 1.805 0 3.522-0.374 5.078-1.049l-0.083 0.032zM28.646 18.052c-1.571-0.474-3.376-0.747-5.245-0.747-0.964 0-1.911 0.073-2.836 0.213l0.104-0.013c0.98 2.564 1.842 5.629 2.436 8.789l0.054 0.344c2.874-1.96 4.893-4.993 5.482-8.51l0.010-0.075zM16 30.996c0 0 0 0-0 0-8.282 0-14.996-6.714-14.996-14.996s6.714-14.996 14.996-14.996c8.282 0 14.996 6.714 14.996 14.996 0 0 0 0 0 0v0c-0.011 8.277-6.718 14.984-14.995 14.996h-0.001z"></path></svg></a></li>
                            <li><a href={item.social4}><svg fill="#1351a8" width="18px"height="18px" viewBox="0 -50 512 512"><g id="7935ec95c421cee6d86eb22ecd11b7e3"><path style={{display: 'inline'}} d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"></path></g></svg></a></li>
                        </ul>
                    </div>
                </div>
                <div className='single_team_skills'>
                    <div className='left'>
                        <h3>Activities And Skills</h3>
                        <ul>
                            {item.skils.map(i => <li><FontAwesomeIcon style={{marginRight : '8px', fontSize : '13px', color : '#162e66'}} icon={faAnglesRight} /><strong>{i[0]} </strong>{i[1]}</li>)}
                            
                        </ul>
                    </div>
                    <div className='right'>
                        <h3>Professional Skills</h3>
                        <p>{item.text3}</p>
                        <div className='graphic'>
                            <p>Technical skills<span>{item.procent1}</span></p>
                            <div className='graphic_line' style={{background : `linear-gradient(90deg, #162e66 ${item.procent1}, #f1f1f1 20%)`}}></div>
                        </div>
                        <div className='graphic'>
                            <p>Marketing<span>{item.procent2}</span></p>
                            <div className='graphic_line' style={{background : `linear-gradient(90deg, #162e66 ${item.procent2}, #f1f1f1 20%)`}}></div>
                        </div>
                        <div className='graphic'>
                            <p>Web Consulting <span>{item.procent3}</span></p>
                            <div className='graphic_line' style={{background : `linear-gradient(90deg, #162e66 ${item.procent3}, #f1f1f1 20%)`}}></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='clients'>
                <h4>Trusted by companies like:</h4>
                <div>
                    {item.trusted_by.map(item => <img width='85px' height='30px' src={item} />)}
                </div>
            </div>
        </>
    )
}

export default SingleTeam