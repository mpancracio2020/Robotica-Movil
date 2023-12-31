import React from "react";
import Accordion from '../Accordion';
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

// VARIABLES IMGS
var laserD = require('../images/laser_def.png')
var grad = require('../images/1.png')
var vff = require('../images/Virtual-Force-Field-algorithm.png')
var fsm = require('../images/p1_RM.png')

export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );
 
// abito
  const accordionData = [
    {
      title: 'Section 1',
      content: `This practice consists of developing an iterative pseudo-navigation algorithm.
                        I have used the bumper and laser sensor to avoid collisions. The laser will predominate in the measurements, 
                        but it may be the case that in some turns it does not sense a corner and that is where the bumper comes into play.`
    }
  ];
  //pito

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
        
          { /*fefe*/} 
            <div>
            <h1>Basic Vacuum Cleaner <Icon icon="solar:smart-vacuum-cleaner-outline" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                  <p>
                    {"\n"}
                    {"\n"}
                    <span> </span>
                    This practice consists of developing an iterative pseudo-navigation algorithm.
                        I have used the bumper and laser sensor to avoid collisions. The laser will predominate in the measurements, 
                        but it may be the case that in some turns it does not sense a corner and that is where the bumper comes into play.
                        {"\n"}
                        {"\n"}
                        <span> </span>
                        Below is a state diagram of the implementation
                        {"\n"}
                        {"\n"}
                        <span> </span>
                    <center>
                      <img src={fsm} width={650} height={550} alt='Large Pizza' />
                    </center>
                    
                      {"\n"}
                        {"\n"}
                        <span> </span>

                    Before moving, the robot will check if there is any object nearby with the laser. If there is,{"\n"} 
                    the robot will go backwards for 3 seconds. This would be his first state.{"\n"}
                    In case of hitting the bumper, the robot will rotate randomly for 3 seconds {"\n"}

                  
                    Afterwards, it will go to the third state, where if it has not detected anything nearby, nor has it collided with the bumper, {"\n"}
                    the robot will be able to advance in a spiral or straight, depending on the mode it has activated.{"\n"}
                      {"\n"}
                        {"\n"}
                        <span> </span>
                    
                        
                    This default mode is spiral, but depending on whether or not the robot has an object nearby after having to go backwards, it will {"\n"}
                    change to straight forward or not. If there is nothing nearby, the robot will randomly decide to move forward straight or in a spiral.{"\n"}
                    {"\n"}
                    {"\n"}
                    <span> </span>
                    
                  
                     Here is an example video: {"\n"}
                     {"\n"}
                      {"\n"}
                      <span> </span>
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/xwCpgUhGOrc?si=8J8rmt9WVKy6X2y-" 
             title="YouTube video player" frameborder="0" allow="fullscreen;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowfullscreen></iframe>  </center>
                  
                  </p>

                                  } />
              ))}
            </div>
          </div>
                
    { /*fefe*/}             
                
                

          { /**/}

          { /*fefe*/} 
            <div>
            <h1>Follow Line<Icon icon="ion:car-sport-sharp" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content...'} 
                  content={
                  <p>
                    This practice consists of keeping track of the red line (in this case) in order to travel the circuit. 
                    The tracking is implemented thanks to the car\'s camera, which will tell us the almost exact position of the line with respect to the car. {"\n"}
                    For color filtering we have used the following method:

                    <code>
                          <pre>{"\n"}

                              def image_filter(img):{"\n"}{"\n"}

                                {"\t"}height, width, channels = img.shape{"\n"}
                                {"\t"}descentre = 160{"\n"}
                                {"\t"}rows_to_watch = 20{"\n"}
                              
                                {"\t"}img_hsv=cv2.cvtColor(img, cv2.COLOR_BGR2HSV){"\n"}{"\n"}
                              
                                {"\t"}lower_red = np.array([0,50,50]){"\n"}
                                {"\t"}upper_red = np.array([10,255,255]){"\n"}{"\n"}
                              
                                {"\t"}mask0 = cv2.inRange(img_hsv, lower_red, upper_red){"\n"}{"\n"}
                              
                                {"\t"}# upper mask (170-180){"\n"}
                                {"\t"}lower_red = np.array([170,50,50]){"\n"}
                                {"\t"}upper_red = np.array([180,255,255]){"\n"}
                                {"\t"}mask1 = cv2.inRange(img_hsv, lower_red, upper_red){"\n"}{"\n"}
                              
                                {"\t"}final_img = mask0+mask1{"\n"}{"\n"}
                          
                                {"\t"}return final_img{"\n"}
                          </pre>
                    </code>

                    After filtering the image we proceed to calculate the moment and the centroids of the image, with them we will get the error, {"\n"}
                    which will be the centroid at x minus half of the image

                    <code>
                      <pre>{"\n"}

                        m = cv2.moments(mask, False){"\n"}{"\n"}
                        
                        try:{"\n"}
                              {"\t"}cx, cy = m['m10']/m['m00'], m['m01']/m['m00']{"\n"}
                        except ZeroDivisionError:{"\n"}
                              {"\t"}cy, cx = height/2, width/2{"\n"}{"\n"}
                    
                    
                        # Bitwise-AND mask and original image{"\n"}
                        res = cv2.bitwise_and(img_hsv,img_hsv, mask= mask){"\n"}{"\n"}
                    
                        contours, __ = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_L1){"\n"}
                        print(str(len(contours))){"\n"}
                        centres = []{"\n"}{"\n"}
                        
                        for i in range(len(contours)):{"\n"}
                              {"\t"}moments = cv2.moments(contours[i]){"\n"}
                              {"\t"}try:{"\n"}
                                  {"\t"}  {"\t"}centres.append((int(moments['m10']/moments['m00']), int(moments['m01']/moments['m00']))){"\n"}
                                  {"\t"}  {"\t"}cv2.circle(res, centres[-1], 10, (0, 255, 0), -1){"\n"}
                              {"\t"}except ZeroDivisionError:{"\n"}
                                  {"\t"}  {"\t"}pass{"\n"}{"\n"}
                    
                        cv2.circle(res,(int(cx), int(cy)), 10,(0,0,255),-1){"\n"}{"\n"}
                        
                        cv2.waitKey(1){"\n"}{"\n"}
                         
                        error_x = cx - width / 2 # This is the error with red line.{"\n"}
 
                      
                      
                      
        
                      </pre>
                      
                    
                    </code>

                    After this, we only have to pass the error to the PID, which returns an angular velocity. {"\n"}
                    This speed will be the error introduced to the linear speed PID to slow down in curves.

                    <code>
                      <pre>{"\n"}
                      # Time to compute the error correction of angular and linear vels.{"\n"}
                      pid_controller = PIDController(KP_, KI_, KD_){"\n"}
                      input_error_ang = -error_x / width{"\n"}
                      
                      # Get angular vel.{"\n"}
                      angular_vel = pid_controller.compute_angular_vel(input_error_ang){"\n"}
                      
                      
                      # Linear PID:{"\n"}
                      Kp_linear = 0.8{"\n"}
                      Ki_linear = 0.01{"\n"}
                      Kd_linear = 0.9{"\n"}
                      
                      linear_velocity_pid_controller = LinearVelocityPIDController(Kp_linear, Ki_linear, Kd_linear){"\n"}
                      
                      linear_vel = linear_velocity_pid_controller.update(angular_vel){"\n"}
                      
                  
                      # Compensates the angular speed with the linear speed{"\n"}
                      
                      angular_vel =  -error_x / width{"\n"}
                      final_lineal_vel = (init_vel - abs((init_vel/2)*linear_vel)){"\n"}
                      
                      if(final_lineal_vel &lt; 1): #maybe the compute is negative... and the car goes backward{"\n"}
                        {"\t"}final_lineal_vel = 1{"\n"}
                      
                      
                      
                      
                      
                      </pre>
                    
                    Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/INYLR4tJlCU?si=FadzPEf-TgiYn9Wb" 
                              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                              picture-in-picture; web-share" allowfullscreen></iframe>  </center>
                    
                    </code>
                    
                    </p>



                    } />
                 
              ))}
            </div>
          </div>
                
    { /*fefe*/}
    { /*------P3---------*/}
           <div>
            <h1>Obstacle Avoidance <Icon icon="game-icons:f1-car" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                  <p>This practice consists of developing an iterative local navigation algorithm using VFF.
                      
                First of all, it is to find the points of interest, that is, the target point, and the current point of the robot.
                To do this, we determine these points with the following instructions.
                        <code class="python"><pre>
                            {"\t"}carPos = [HAL.getPose3d().x,HAL.getPose3d().y]{"\n"}
                            {"\t"}targetPos = [currentTarget.getPose().x, currentTarget.getPose().y]{"\n"}
                     
                      </pre></code>

                
                Next we establish the attractive force vector.

                    <code class="python"><pre>
                        {"\t"}x_att, y_att = absolute2relative(target_pos[0], target_pos[1], carPos[0],carPos[1], HAL.getPose3d().yaw){"\n"}
                        {"\t"}f_att = [x_att, y_att]{"\n"}
                        {"\t"}f_att = normalize(f_att){"\n"}
                     
                      </pre></code>
          
                    
                Next we can find the repulsive force, for this we will use the laser, from which we will take the measurements, and we will process them so that they are useful to us.
                I have layered the measurements to avoid noise in the measurements, since we will use the average of all of them.

                    <code class="python"><pre>
                        {"\t"}def parse_laser_data (laser_data):{"\n"}
                        {"\t"}{"\t"}laser = []{"\n"}
                        {"\t"}{"\t"}i = 0{"\n"}
                        {"\t"}{"\t"}dist = laser_data.values{"\n"}
                        {"\t"}{"\t"}collision = False{"\n"}
                        {"\t"}{"\t"}if len(dist) != 0:{"\n"}
                        {"\t"}{"\t"}{"\t"}while (i &lt; 180):{"\n"}
                        {"\t"}{"\t"}{"\t"}{"\t"}dist = laser_data.values[i]{"\n"}
                        {"\t"}{"\t"}{"\t"}{"\t"}if dist &gt; 10.0:{"\n"}
                        {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}dist = 10.0{"\n"}
                        {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}angle = math.radians(i-90) # because the front of the robot is -90 degrees{"\n"}
                        {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}laser += [(dist, angle)]{"\n"}
                              
                        {"\t"}{"\t"}{"\t"}{"\t"}if i &lt; 95 and i &gt; 15:{"\n"}
                        {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}if dist &lt; 0.4:{"\n"}
                        {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}collision = True{"\n"}
                               {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}i+=1{"\n"}
                         {"\t"}return laser, collision{"\n"}
                        
                                             
                      </pre></code>

                Then, calculate repulsive force

                          <code><pre>
                          
                          {"\t"}def get_repulsive_force(laser_data):{"\n"}
                          {"\t"}{"\t"}laser,c = parse_laser_data(laser_data){"\n"}
                          {"\t"}{"\t"}laser_vec = []{"\n"}
                          
                          {"\t"}{"\t"}for dist, angle in laser:{"\n"}
                            
                            {"\t"}{"\t"}{"\t"}x = dist * math.cos(angle) * -1{"\n"}
                            {"\t"}{"\t"}{"\t"}y = dist * math.sin(angle) * -1{"\n"}
                            {"\t"}{"\t"}{"\t"}v = (x,y){"\n"}
                            {"\t"}{"\t"}{"\t"}laser_vec += [v]{"\n"}
                            {"\t"}{"\t"}{"\t"}laser_mean = np.mean(laser_vec,axis=0){"\n"}
                          
                          
                          {"\t"}{"\t"}if abs(laser_mean[0]) &lt; 0.02: # eliminate noise{"\n"}
                            {"\t"}{"\t"}{"\t"}laser_mean[0] = 0{"\n"}
                          
                          {"\t"}{"\t"}if abs(laser_mean[1]) &lt; 0.02:{"\n"}
                            {"\t"}{"\t"}{"\t"}laser_mean[1] = 0{"\n"}
                          
                          {"\t"}return laser_mean, c{"\n"}
 
                          
                          </pre>
                          </code>
                {"\n"}
                <p><pre>
                Once we have the two components, it is time to calculate the resulting Force from which we will obtain linear and angular velocity.{"\n"}
                And with that we would have the practice.{"\n"}


                Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/DZqT9qP41wE?si=FvD6IY6zgynJ4Y_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </center>
                    
                    
              </pre></p>
             </p>



                    } />
                 
              ))}
            </div>         
            </div>

  { /*------P4---------*/}
           <div>
            <h1> Global Navigation <Icon icon="fa:taxi" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                    
                    <p>This practice consists of building a map based on an image, establishing an initial starting point and an objective to reach. Building a navigation map, where each position will have a value or cost.{"\n"}
                    The objective is to reach the objective with the lowest possible cost. {"\n"}
                    In this exercise we have assigned a higher cost to the diagonals than to the tangent movements, so that our cost would be something like this:
                    <center>
                     <img src={grad} width={350} height={350} alt='Large Pizza' />
                    </center>

                    Once we have our map, we proceed to navigate with it, to do this we must know the route, and if we are getting closer or further away, or even if we have already arrived.
              
                
                 
                    <p></p>

                    To move,I used VFF as I did the last exercise, so again I have some like this:
                    
                    <center>
                     <img src={vff} width={350} height={350} alt='Large Pizza' />
                    </center>

                    <p></p>

                    <h3>Issues and solutions</h3>
                      <p>
                        One problem was diagonal positions, so the robot frequently goes diagonally and thats a problem. To solve that, I have implement one more method {"\n"}
                        to check this positions, like normal ones.
                      </p>            

            

                Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/XPYzEjeDVTs?si=6Xzgu4VeYGlJ8ZnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </center>
                    
                    
              </p>
            



                    } />
                 
              ))}
            </div>         
            </div>


           { /*------P5---------*/}
           <div>
            <h1> Montecarlo Laser Loc<Icon icon="arcticons:locus" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                    
                    <p>
                    <p>
                     <pre>
                    In this task we must implement a particle filter, due to certain problems with the platform I have done my implementation in no_unibotics{"\n"}
                    <span> </span>
                      The algorithm would be the following: 
                      {"\n"}
                      {"\n"}
                      <span> </span>
                      {"\t"}1. We generate the particles randomly.{"\n"} 
                      {"\n"}
                      {"\n"}
                      <span> </span>
                      {"\t"}2. We calculate their weights in comparison to each particle laser and the robot laser.{"\n"} 
                      {"\n"}
                      {"\n"}
                      <span> </span>
                      {"\t"}3. We readjust the particles based on said weights, if there is 0 weight that particle will disappear{"\n"}
                      {"\n"}
                      {"\n"}
                      <span> </span>
                      </pre> 
                      </p>
                                         
                    <h3>Issues and solutions</h3>
                      <p>
                        
                        A problem with doing the practice in no_unibotics turned out to be the computing capacity of my machine, since my processor is somewhat old,{"\n"}
                        I could not iterate my implementation with many particles.{"\n"}
                        
                      </p>            

            

                Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/H-_eovWaxSM?si=Qj06qoeYP5e_4MAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </center>
                    
                    
              </p>
            



                    } />
                 
              ))}
            </div>         
            </div>
          
          
          {/*mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map(function ({
                  id,
                  image,
                  name,
                  description,
                  html_url,
                  homepage,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        image={image}
                        name={name}
                        description={description}
                        url={html_url}
                        demo={homepage}
                      />
                    </Col>
                  );
                })}
              </Row>
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <Icon icon="solar:smart-vacuum-cleaner-outline" /> Projects
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )*/}
        </Container>
      </section>
    </Element>
  );
}
