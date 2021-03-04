import {get,post} from "./http";

// 判断管理员是否登录成功
export const getLoginStatus = (params) => post(`admin/login`,params);


//============歌手相关================
//分页，模糊查询歌手
export const getAllSingerPage =(params) => get(`singer/allSingerPage`, params);
//不分页查询所有歌手
export const allSinger =() => get(`singer/allSinger`);
//添加歌手
export const setSinger = (singer) => post(`singer/add`,singer);
//编辑歌手
export const updateSinger = (singer) => post(`singer/updateSingerInfo`,singer);
//删除歌手
export const delSinger = (id) => get(`singer/deleteASinger?id=${id}`);

//============歌曲相关================
//根据歌手id查询歌曲
export const songOfSingerId =(params) => get(`song/singerSongPage`, params);
// //根据歌手id查询该歌手的全部歌曲
// export const songOfSingerId =(params) => get(`song/singerSongPage`, params);
//编辑歌曲
export const updateSong = (song) => post(`song/updateSongInfo`,song);
//删除歌曲
export const delSong = (id) => get(`song/deleteASong?id=${id}`);
//根据歌曲id查询歌曲对象
export const songOfSongId =(id) => get(`song/detail?songId=${id}`);
//根据歌曲名获取歌曲对象
export const songOfSongName =(songName) => get(`song/songOfSongName?songName=${songName}`);
//查询所有歌曲
export const allSong =(singerId) => get(`song/allSong?singerId=${singerId}`);

//============歌单相关================
//查询歌单
export const getAllSongList =(params) => get(`songList/getAllSongList`,params);
//添加歌单
export const setSongList = (songList) => post(`songList/addSongList`,songList);
//编辑歌单
export const updateSongList = (params) => post(`songList/updateSongList`,params);
//删除歌单
export const delSongList = (id) => get(`songList/deleteASongList?id=${id}`);

//============歌单的歌曲相关============
//根据歌单id查询歌曲列表
export const listSongDetail = (songListId) => get(`listSong/getListSong?songListId=${songListId}`);
//给歌单增加歌曲
export const listSongAdd = (listSong) => post(`listSong/addSongToSongList`,listSong);
//删除歌单的歌曲
export const delListSong = (songListId,songId) => get(`listSong/deleteASongFromSongList?songListId=${songListId}&songId=${songId}`);

//============用户相关================
//查询用户
export const getAllConsumer =() => get(`consumer/allConsumer`);
//添加用户
export const setConsumer = (params) => post(`consumer/add`,params);
//编辑用户
export const updateConsumer = (params) => post(`consumer/update`,params);
//删除用户
export const delConsumer = (id) => get(`consumer/delete?id=${id}`);
//根据用户id查询该用户的详细信息
export const getUserOfId =(id) => get(`/consumer/selectByPrimaryKey?id=${id}`);

//===============收藏===================
//指定用户的收藏列表
export const getCollectOfUserId = (userId) => get(`/collect/collectOfUserId?userId=${userId}`);
//删除用户收藏的歌曲
export const deleteCollection = (userId,songId) => get(`collect/delete?userId=${userId}&songId=${songId}`);

//===============评论===================
//指定歌单的评论列表
export const getCommentOfSongListId = (songListId) => get(`/comment/commentOfSongListId?songListId=${songListId}`);
//删除评论
export const deleteComment = (id) => get(`comment/delete?id=${id}`);

