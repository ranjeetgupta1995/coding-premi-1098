
import React from 'react'
import styled from 'styled-components'


function Blog() {
  return (
    <MainDiv>
      
        <div className='headingNavbar'><h1>Our Blogs</h1></div>
        <div className='course-div'>
            <div className='image-div'>
              <img src="https://datainflow.com/wp-content/uploads/2018/02/learn-javascript-online.jpg" alt="javascriptImage" />
            </div>
            <div className='java-content'>
                <h1>JavaScript Learning Course</h1>
                <p>JavaScript is a versatile and widely-used programming language that enables dynamic and interactive content on websites. It is primarily used for client-side scripting, allowing developers to create responsive and engaging web applications. JavaScript is supported by all major web browsers and is essential for enhancing user experience through features like form validation, animations, and real-time updates without the need to reload the entire webpage.  <a href="https://en.wikipedia.org/wiki/JavaScript">Read more...</a></p>
                <div className='person-read'>
                    <img src="https://th.bing.com/th/id/OIP.dNtFudvD2hAJMOhOBNysXwHaHa?pid=ImgDet&w=526&h=526&rs=1" width={"50px"} alt="person-image" />
                    <div>
                        <b>Harsh Advani</b>
                        <pre>A Few hours ago  5 min read</pre>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-div2'>
            <div className='java-content'>
                <h1>Spoken English</h1>
                <p>Spoken English: English is one of the widely spoken language in the world. Hence, to be successful in life, you need to have a good command over it. Speaking English proficiently is an art which is independent of your writing abilities in the language. You will often come across individuals possessing a flair for writing but still struggling in spoken English. Even after seeking quality education from schools where the medium of teaching is English, many students can’t use the language in public. <a href="https://leverageedu.com/blog/spoken-english//">Read more...</a></p>
                <div className='person-read'>
                    <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg" width={"50px"} alt="person-image" />
                    <div>
                        <b>Shrawan Mishra</b>
                        <pre>A Few hours ago  10 min read</pre>
                    </div>
                </div>
            </div>
            <div className='image-div'>
              <img src='https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/05011631/How-to-Learn-Spoken-English_.png' alt="javascriptImage" />
            </div>
        </div>
        <div className='course-div'>
            <div className='image-div'>
              <img src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/03/03144122/maxresdefault-4-1-1024x477.jpg" alt="javascriptImage" />
            </div>
            <div className='java-content'>
                <h1>Current Affairs</h1>
                <p>
                Current affairs are the world’s happenings, quite literally the current affairs of the world. It refers to every single thing currently taking place in the world right now, and the people well versed in it are incredibly knowledgable and well-read. It is incredibly vital for all the aspirants of the Kerala Public Service Commission (Kerala PSC) to make good note of the current affairs taking place in the world. To be in public service, one must be fully aware of our surroundings, immediate, national and even international. <a href="https://www.gktoday.in/current-affairs/month/current-affairs-january-2024/">Read more...</a>
                </p>
                <div className='person-read'>
                    <img src="https://i.pinimg.com/originals/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.png" width={"50px"} alt="person-image" />
                    <div>
                        <b>Sakira Varma</b>
                        <pre>A Few hours ago  15 min read</pre>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-div2'>
            <div className='java-content'>
                <h1>HTML5 Learning Course</h1>
                <p>
                   HTML5, or HyperText Markup Language 5, is the latest version of the standard markup language used to create and structure content on the World Wide Web. Developed and maintained by the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG), HTML5 introduces new features and improvements over its predecessors (like HTML 4 and XHTML). <a href="https://en.wikipedia.org/wiki/HTML5">Read more...</a>
                </p>
                <div className='person-read'>
                    <img src="https://i1.rgstatic.net/ii/profile.image/577690925502464-1514743657420_Q512/Hemali-Batra-Sharma.jpg" width={"50px"} alt="person-image" />
                    <div>
                        <b>Dipali Mukharji</b>
                        <pre>A Few hours ago  10 min read</pre>
                    </div>
                </div>
            </div>
            <div className='image-div'>
              <img src="https://64.media.tumblr.com/e705f0275d8b9dcc0b1cdfb812e5d3fe/a580d9a9aba95f2d-c6/s2048x3072_c8467,13600,52600,88000/6ae2059f4017e5f6078a63ef06766bd4850d66e4.png" alt="javascriptImage" />
            </div>
        </div>

    </MainDiv>
  )
}

export { Blog }

const MainDiv = styled.div`
box-sizing: border-box;
margin: 0%;
padding: 0%;
.headingNavbar{
    width: 100%;
    h1{
        font-size: 3rem;
       display: flex;
       justify-content: center;
       align-items: center;
       color: #fff;
       height: 50vh;
       background-image: url("https://designtekgraphics.com/wp-content/uploads/2016/01/designtek-responsive-web-design.jpg");
    }
}
.course-div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 3.5rem auto;
    .image-div{
        width: 40%;
        img{
           width: 100%;
           border-radius: .8rem;
         }
    }
    .java-content{
        width: 50%;
        h1{
            margin-bottom: 2rem;
            font-size: 40px;
            width: 90%;
        }
        a{
            text-decoration: none;
            color: #196be6;
        }
        .person-read{
            margin-top: 1.2rem;
            width: 37%;
            display: flex;
            align-items: center;
            
            img{
                border-radius: 50%;
                margin-right: .8rem;
            }
        }
    }
}
.course-div2{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 3.5rem auto;

    .image-div{
        width: 40%;
        img{
           width: 100%;
           border-radius: .8rem;
         }
    }
    .java-content{
        width: 50%;
        h1{
            margin-bottom: 2rem;
            font-size: 40px;
            width: 90%;
        }
        a{
            text-decoration: none;
            color: #196be6;
        }
        .person-read{
            margin-top: 1.2rem;
            width: 37%;
            display: flex;
            align-items: center;
            
            img{
                border-radius: 50%;
                margin-right: .8rem;
            }
        }
    }
}
@media screen and (max-width: 950px) {
    .course-div{
    display: flex;
    flex-direction: column;
    .image-div{
        width: 50%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 30px;
            width: 100%;
        } 
    }
    }
    .course-div2{
    display: flex;
    flex-direction: column-reverse;
    .image-div{
        width: 50%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 30px;
            width: 100%;
        } 
    }
    }
}
@media screen and (max-width: 500px) {
    .course-div{
    display: flex;
    flex-direction: column;
    .image-div{
        width: 80%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 25px;
            width: 100%;
            /* border: 1px solid red; */
        } 
    }
}
.course-div2{
    display: flex;
    flex-direction: column-reverse;
    .image-div{
        width: 80%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 25px;
            width: 100%;
            /* border: 1px solid red; */

        } 
    }
}
}
    
`
