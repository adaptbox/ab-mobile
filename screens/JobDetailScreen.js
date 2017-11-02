import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

export default class JobDetail extends Component {
    render() {
        const { job } = this.props.navigation.state.params;
        return (
            <View style={styles.jobDetail}>
                <NavBar title="Job Detail" navigation={this.props.navigation} />
                <View style={styles.jobDetail_images}>
                    <Carousel images={job.pictures} />
                </View>
                <View style={styles.jobDetail_ownerInfo}>
                    <Text style={styles.text1}>{`${job.firstName} ${job.lastName}`}</Text>
                    <Text style={styles.text2}>{`${job.email}`}</Text>
                    <Text style={styles.text3}>
                        <MaterialIcons
                            name="location-on"
                            style={styles.locationIcon}
                        />
                        {`${job.location}`}
                    </Text>
                </View>
                <View style={styles.jobDetail_carInfo}>
                    <View style={styles.jobDetail_cell}>
                        <View style={styles.jobDetail_cellBox1}>
                            <Text style={styles.jobDetail_cellText}>Model</Text>
                        </View>
                        <View style={styles.jobDetail_cellBox2}>
                            <Text style={[styles.jobDetail_cellText, { color: Colors.red1 }]}>{job.model}</Text>
                        </View>
                    </View>
                    <View style={styles.jobDetail_cell}>
                        <View style={styles.jobDetail_cellBox3}>
                            <Text style={styles.jobDetail_cellText}>Make</Text>
                            <Text style={[styles.jobDetail_cellText, { color: Colors.red1 }]}>{job.make}</Text>
                        </View>
                        <View style={styles.jobDetail_cellBox4}>
                            <Text style={styles.jobDetail_cellText}>Year</Text>
                            <Text style={[styles.jobDetail_cellText, { color: Colors.red1 }]}>{job.year}</Text>
                        </View>
                    </View>
                </View>
                <TouchableHighlight
                    underlayColor={Colors.red1}
                    activeOpacity={0.5}
                    style={styles.jobDetail_button}
                    onPress={() => this.props.navigation.navigate('Home')}
                    accessibilityLabel="Update info"
                >
                    <Text style={styles.jobDetail_buttonText}>
                        Revise
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jobDetail: {
        flex: 1,
    },
    jobDetail_images: {
        flex: 1.5,
    },
    jobDetail_ownerInfo: {
        flex: 1,
        backgroundColor: Colors.white1,
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: 'center',
    },
    jobDetail_carInfo: {
        flex: 1,
        backgroundColor: Colors.white1,
        padding: 20,
        justifyContent: 'center',
    },
    jobDetail_button: {
        backgroundColor: Colors.red1,
        width: Layout.window.width,
        height: 60,
    },
    jobDetail_buttonText: {
        textAlign: 'center',
        color: Colors.white1,
        lineHeight: 60,
        fontFamily: 'os bold',
        fontSize: 16,
    },
    text1: {
        fontFamily: 'os bold',
        fontSize: 24,
        color: Colors.black2,
    },
    text2: {
        fontFamily: 'os',
        color: Colors.gray1,
    },
    text3: {
        fontFamily: 'os',
        color: Colors.gray1,
        fontSize: 20,
        marginTop: 10,
    },
    locationIcon: {
        fontSize: 16,
        color: Colors.red1,
    },
    jobDetail_cell: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    jobDetail_cellBox1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderColor: Colors.gray2,
        height: '100%',
    },
    jobDetail_cellBox2: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderColor: Colors.gray2,
        height: '100%',
    },
    jobDetail_cellBox3: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.gray2,
        height: '100%',
    },
    jobDetail_cellBox4: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderColor: Colors.gray2,
        height: '100%',
    },
    jobDetail_cellText: {
        fontSize: 16,
        fontFamily: 'os bold',
    },
});

JobDetail.propTypes = {
    navigation: PropTypes.object.isRequired,
};
