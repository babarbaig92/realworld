FROM ruby:3.1.2-buster
ENV HOME /app


RUN apt-get update &&\
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Bundle Install
WORKDIR /app
ADD Gemfile Gemfile.lock ./
RUN bundle install

# Add Rails App
RUN groupadd -g 1001 app &&\
    useradd --system -u 1001 -g 1001 -M app &&\
    chown -R app:app /app
USER app
ADD --chown=app:app . /app
ENV RAILS_ENV=production

# ??
ENV REDIS_PROVIDER=REDIS_URL
ENV DATABASE_HOST=mysql8 DATABASE_NAME=realworld DATABASE_USERNAME=user DATABASE_PASSWORD=pass SERVER_URL=example.com

EXPOSE 4000
CMD ["bundle","exec","puma","-b","tcp://0.0.0.0:4000","-t","4:32","-w","$(nproc)"]
