-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "username" VARCHAR(15) NOT NULL,
    "senha" VARCHAR(100) NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tweet" (
    "id" UUID NOT NULL,
    "conteudo" VARCHAR(200) NOT NULL,
    "tipo" INTEGER NOT NULL,
    "id_usuario" UUID NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" UUID NOT NULL,
    "usernameUsuario" VARCHAR(15) NOT NULL,
    "id_tweet" UUID NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReTweet" (
    "id_tweet" UUID NOT NULL,
    "id_retweet" UUID NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Seguidor" (
    "id" UUID NOT NULL,
    "id_usuario" UUID NOT NULL,
    "id_seguidor" UUID NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seguidor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tweet_id_usuario_key" ON "tweet"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Like_usernameUsuario_key" ON "Like"("usernameUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Like_id_tweet_key" ON "Like"("id_tweet");

-- CreateIndex
CREATE UNIQUE INDEX "ReTweet_id_tweet_key" ON "ReTweet"("id_tweet");

-- CreateIndex
CREATE UNIQUE INDEX "ReTweet_id_retweet_key" ON "ReTweet"("id_retweet");

-- CreateIndex
CREATE UNIQUE INDEX "Seguidor_id_usuario_key" ON "Seguidor"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Seguidor_id_seguidor_key" ON "Seguidor"("id_seguidor");

-- AddForeignKey
ALTER TABLE "tweet" ADD CONSTRAINT "tweet_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_usernameUsuario_fkey" FOREIGN KEY ("usernameUsuario") REFERENCES "usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_id_tweet_fkey" FOREIGN KEY ("id_tweet") REFERENCES "tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReTweet" ADD CONSTRAINT "ReTweet_id_tweet_fkey" FOREIGN KEY ("id_tweet") REFERENCES "tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReTweet" ADD CONSTRAINT "ReTweet_id_retweet_fkey" FOREIGN KEY ("id_retweet") REFERENCES "tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_id_seguidor_fkey" FOREIGN KEY ("id_seguidor") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
