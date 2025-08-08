import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalJourney = () => {
  const journeyMilestones = [
    {
      title: "The Spark",
      year: "2017",
      description: "Built my first website at 16 using HTML and CSS. The moment I saw my code come to life in the browser, I knew I'd found my calling.",
      emotion: "Wonder & Discovery",
      icon: "Sparkles"
    },
    {
      title: "The Challenge",
      year: "2018",
      description: "Struggled with JavaScript for months. Almost gave up, but the breakthrough moment when I finally understood closures changed everything.",
      emotion: "Perseverance",
      icon: "Mountain"
    },
    {
      title: "The Community",
      year: "2019",
      description: "Joined my first developer meetup. Realized that coding isn\'t just about syntax—it\'s about solving real problems for real people.",
      emotion: "Connection",
      icon: "Users"
    },
    {
      title: "The Growth",
      year: "2020-2022",
      description: "Transitioned from junior to senior developer. Learned that technical skills are just the foundation—communication and empathy are equally important.",
      emotion: "Maturity",
      icon: "TrendingUp"
    },
    {
      title: "The Vision",
      year: "2023-Present",
      description: "Launched my freelance career with a clear mission: create technology that genuinely improves people\'s lives and businesses.",
      emotion: "Purpose",
      icon: "Target"
    }
  ];

  const personalValues = [
    {
      title: "Curiosity-Driven Learning",
      description: "I believe the best developers are perpetual students. Every project teaches me something new.",
      icon: "BookOpen",
      example: "Currently exploring AI integration in web apps and contributing to open-source projects."
    },
    {
      title: "Human-Centered Technology",
      description: "Technology should amplify human potential, not complicate it. Every feature I build serves a real user need.",
      icon: "Heart",
      example: "I always start with user stories and end with usability testing to ensure genuine value."
    },
    {
      title: "Sustainable Excellence",
      description: "Quality isn\'t about perfection—it\'s about building solutions that remain valuable over time.",
      icon: "Leaf",
      example: "I write code that my future self (and other developers) will thank me for."
    }
  ];

  const passionDrivers = [
    {
      title: "Problem-Solving Rush",
      description: "There\'s nothing quite like the moment when a complex problem finally clicks into place.",
      icon: "Puzzle"
    },
    {
      title: "Creative Expression",
      description: "Code is my canvas. Every project is an opportunity to create something beautiful and functional.",
      icon: "Palette"
    },
    {
      title: "Impact & Legacy",
      description: "Knowing that my work helps businesses grow and users accomplish their goals drives me every day.",
      icon: "Award"
    },
    {
      title: "Continuous Evolution",
      description: "The tech landscape never stops changing, and neither do I. Growth is the only constant.",
      icon: "Repeat"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            My Personal Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The path that led me to become not just a developer, but a digital craftsman passionate about creating meaningful technology experiences.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            {journeyMilestones?.map((milestone, index) => (
              <motion.div
                key={milestone?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card p-6 hover:shadow-brand-lg transition-brand">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={milestone?.icon} size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{milestone?.title}</h3>
                        <p className="text-sm text-accent font-medium">{milestone?.year}</p>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {milestone?.description}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" size={14} className="text-success" />
                      <span className="text-xs text-success font-medium">{milestone?.emotion}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-brand-md"></div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Values */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Core Personal Values</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The principles that guide my approach to development and shape every decision I make.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {personalValues?.map((value, index) => (
              <motion.div
                key={value?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-brand-lg transition-brand group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-brand">
                  <Icon 
                    name={value?.icon} 
                    size={24} 
                    className="text-accent group-hover:text-white transition-brand" 
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-brand">
                  {value?.title}
                </h4>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {value?.description}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-text-secondary italic">
                    {value?.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What Drives My Passion */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">What Drives My Passion</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The forces that fuel my enthusiasm for technology and keep me excited about every new project.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passionDrivers?.map((driver, index) => (
              <motion.div
                key={driver?.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-brand-lg transition-brand group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-brand">
                  <Icon 
                    name={driver?.icon} 
                    size={20} 
                    className="text-primary group-hover:text-white transition-brand" 
                  />
                </div>
                
                <h4 className="font-semibold text-primary mb-3 group-hover:text-primary/80 transition-brand">
                  {driver?.title}
                </h4>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {driver?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Photos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-12">Beyond the Code</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coding Context */}
            <div className="card p-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Developer working on code"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-primary mb-2">In My Element</h4>
              <p className="text-sm text-text-secondary">
                Late-night coding sessions fueled by curiosity and the drive to solve complex problems.
              </p>
            </div>

            {/* Client Meeting Context */}
            <div className="card p-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="Professional meeting discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-primary mb-2">Collaborative Spirit</h4>
              <p className="text-sm text-text-secondary">
                Working closely with clients to understand their vision and translate it into digital reality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalJourney;