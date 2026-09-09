pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Arman-6/webapp-deploy.git'
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t webapp-deploy:latest .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm -f webapp-deploy || true'
                sh 'docker run -d --name webapp-deploy -p 3001:3000 webapp-deploy:latest'
            }
        }
    }
}
